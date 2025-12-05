import { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native'
import { supabase } from '@/lib/supabase'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function OrdersScreen() {
  const router = useRouter()
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  useEffect(() => {
    fetchOrders()
  }, [filter])

  const fetchOrders = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      setLoading(false)
      return
    }

    let query = supabase
      .from('orders')
      .select('*, order_items(*, products(name, image_url))')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (filter === 'active') {
      query = query.in('status', ['pending', 'confirmed', 'preparing', 'ready', 'assigned', 'picked_up', 'in_transit'])
    } else if (filter === 'completed') {
      query = query.in('status', ['delivered', 'cancelled'])
    }

    const { data } = await query

    setOrders(data || [])
    setLoading(false)
    setRefreshing(false)
  }

  const onRefresh = () => {
    setRefreshing(true)
    fetchOrders()
  }

  const getStatusColor = (status: string) => {
    const colors: any = {
      pending: '#f59e0b',
      confirmed: '#3b82f6',
      preparing: '#8b5cf6',
      ready: '#6366f1',
      assigned: '#06b6d4',
      picked_up: '#f97316',
      in_transit: '#14b8a6',
      delivered: '#10b981',
      cancelled: '#ef4444'
    }
    return colors[status] || '#6b7280'
  }

  const getStatusIcon = (status: string) => {
    const icons: any = {
      pending: 'time-outline',
      confirmed: 'checkmark-circle-outline',
      preparing: 'restaurant-outline',
      ready: 'cube-outline',
      assigned: 'person-outline',
      picked_up: 'hand-left-outline',
      in_transit: 'car-outline',
      delivered: 'checkmark-done-circle',
      cancelled: 'close-circle-outline'
    }
    return icons[status] || 'help-circle-outline'
  }

  const reorderItems = async (orderId: string) => {
    const order = orders.find(o => o.id === orderId)
    if (!order) return

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // Add all items from this order to cart
    for (const item of order.order_items) {
      await supabase
        .from('cart_items')
        .upsert({
          user_id: user.id,
          product_id: item.product_id,
          quantity: item.quantity
        }, {
          onConflict: 'user_id,product_id'
        })
    }

    alert('Items added to cart!')
    router.push('/cart')
  }

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading orders...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterTab, filter === 'all' && styles.filterTabActive]}
          onPress={() => setFilter('all')}
        >
          <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterTab, filter === 'active' && styles.filterTabActive]}
          onPress={() => setFilter('active')}
        >
          <Text style={[styles.filterText, filter === 'active' && styles.filterTextActive]}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterTab, filter === 'completed' && styles.filterTabActive]}
          onPress={() => setFilter('completed')}
        >
          <Text style={[styles.filterText, filter === 'completed' && styles.filterTextActive]}>Completed</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.ordersContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {orders.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="receipt-outline" size={80} color="#d1d5db" />
            <Text style={styles.emptyText}>No orders yet</Text>
            <TouchableOpacity style={styles.shopButton} onPress={() => router.push('/')}>
              <Text style={styles.shopButtonText}>Start Shopping</Text>
            </TouchableOpacity>
          </View>
        ) : (
          orders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              {/* Order Header */}
              <View style={styles.orderHeader}>
                <View>
                  <Text style={styles.orderNumber}>{order.order_number}</Text>
                  <Text style={styles.orderDate}>
                    {new Date(order.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                  <Ionicons name={getStatusIcon(order.status)} size={16} color="#fff" />
                  <Text style={styles.statusText}>{order.status}</Text>
                </View>
              </View>

              {/* Order Items */}
              <View style={styles.itemsContainer}>
                {order.order_items.slice(0, 3).map((item: any, index: number) => (
                  <View key={index} style={styles.orderItem}>
                    <Text style={styles.itemName}>{item.product_name}</Text>
                    <Text style={styles.itemQuantity}>x{item.quantity}</Text>
                  </View>
                ))}
                {order.order_items.length > 3 && (
                  <Text style={styles.moreItems}>
                    +{order.order_items.length - 3} more items
                  </Text>
                )}
              </View>

              {/* Order Footer */}
              <View style={styles.orderFooter}>
                <View>
                  <Text style={styles.totalLabel}>Total Amount</Text>
                  <Text style={styles.totalAmount}>${Number(order.total).toFixed(2)}</Text>
                </View>
                <View style={styles.actionButtons}>
                  {order.status === 'delivered' && (
                    <TouchableOpacity
                      style={styles.reorderButton}
                      onPress={() => reorderItems(order.id)}
                    >
                      <Ionicons name="refresh" size={16} color="#10b981" />
                      <Text style={styles.reorderText}>Reorder</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity style={styles.detailsButton}>
                    <Text style={styles.detailsText}>Details</Text>
                    <Ionicons name="chevron-forward" size={16} color="#6b7280" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Order Tracking */}
              {['assigned', 'picked_up', 'in_transit'].includes(order.status) && (
                <View style={styles.trackingContainer}>
                  <Ionicons name="location" size={16} color="#10b981" />
                  <Text style={styles.trackingText}>Track your order</Text>
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    gap: 12,
  },
  filterTab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  filterTabActive: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  filterTextActive: {
    color: '#fff',
  },
  ordersContainer: {
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  emptyText: {
    fontSize: 18,
    color: '#6b7280',
    marginTop: 16,
    marginBottom: 24,
  },
  shopButton: {
    backgroundColor: '#10b981',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orderCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 12,
    color: '#6b7280',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  itemsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 12,
    marginBottom: 12,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
  },
  moreItems: {
    fontSize: 12,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 12,
  },
  totalLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10b981',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  reorderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#10b981',
    gap: 4,
  },
  reorderText: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#f3f4f6',
    gap: 4,
  },
  detailsText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
  },
  trackingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    gap: 8,
  },
  trackingText: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
  },
})
