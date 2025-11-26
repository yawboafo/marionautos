'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { useParams, useRouter } from 'next/navigation'

export default function OrderDetailPage() {
  const params = useParams()
  const router = useRouter()

  const order = {
    id: params.id,
    orderNumber: 'ORD-2024-001',
    date: '2024-11-20',
    status: 'Shipped',
    customer: {
      name: 'John Mensah',
      email: 'john@example.com',
      phone: '+233 XX XXX XXXX',
      address: '123 Independence Ave, Accra, Ghana'
    },
    vehicle: {
      make: 'Toyota',
      model: 'Camry',
      year: '2023',
      vin: '1HGBH41JXMN109186',
      color: 'Silver',
      price: 285000,
      currency: 'GHS'
    },
    payment: {
      method: 'Bank Transfer',
      status: 'Paid',
      amount: 285000,
      deposit: 100000,
      balance: 0,
      currency: 'GHS'
    },
    shipping: {
      method: 'Sea Freight',
      cost: 1200,
      estimatedDelivery: '2024-12-15',
      trackingNumber: 'TRK-2024-5678'
    }
  }

  const timeline = [
    { date: '2024-11-20', status: 'Order Placed', description: 'Customer placed order and paid deposit' },
    { date: '2024-11-22', status: 'Payment Confirmed', description: 'Full payment received and verified' },
    { date: '2024-11-25', status: 'In Transit', description: 'Vehicle shipped from USA' },
    { date: '2024-12-15', status: 'Expected Delivery', description: 'Estimated arrival in Ghana' },
  ]

  const handleGenerateInvoice = () => {
    console.log('Generating invoice for order:', params.id)
  }

  const handleUpdateStatus = () => {
    console.log('Updating order status')
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Order Details</h1>
            <p className="text-white/60">{order.orderNumber}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleGenerateInvoice}
              className="px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-crimson transition-all"
            >
              Generate Invoice
            </button>
            <button
              onClick={() => router.push('/admin/orders')}
              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
            >
              Back to Orders
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Order Status</h2>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm">
                  {order.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Order Date:</span>
                <span className="text-white">{order.date}</span>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Vehicle Information</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Vehicle:</span>
                  <span className="text-white font-medium">{order.vehicle.year} {order.vehicle.make} {order.vehicle.model}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">VIN:</span>
                  <span className="text-white">{order.vehicle.vin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Color:</span>
                  <span className="text-white">{order.vehicle.color}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Price:</span>
                  <span className="text-white font-bold text-primary-red">
                    {order.vehicle.currency === 'GHS' ? '₵' : '$'}{order.vehicle.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Payment Information</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Payment Method:</span>
                  <span className="text-white">{order.payment.method}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Payment Status:</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">{order.payment.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Vehicle Price:</span>
                  <span className="text-white">
                    {order.payment.currency === 'GHS' ? '₵' : '$'}{order.payment.amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Shipping Cost:</span>
                  <span className="text-white">
                    {order.payment.currency === 'GHS' ? '₵' : '$'}{order.shipping.cost.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Deposit Paid:</span>
                  <span className="text-white">
                    {order.payment.currency === 'GHS' ? '₵' : '$'}{order.payment.deposit.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-white font-medium">Total Amount:</span>
                  <span className="text-white font-bold text-xl text-primary-red">
                    {order.payment.currency === 'GHS' ? '₵' : '$'}{(order.payment.amount + order.shipping.cost).toLocaleString()}
                  </span>
                </div>
                {order.payment.balance > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Balance Due:</span>
                    <span className="text-red-400 font-medium">
                      {order.payment.currency === 'GHS' ? '₵' : '$'}{order.payment.balance.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Shipping Information */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Shipping Information</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Shipping Method:</span>
                  <span className="text-white">{order.shipping.method}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Tracking Number:</span>
                  <span className="text-white font-mono">{order.shipping.trackingNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Estimated Delivery:</span>
                  <span className="text-white">{order.shipping.estimatedDelivery}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Customer Information */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Customer</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-white/60 text-xs mb-1">Name</p>
                  <p className="text-white font-medium">{order.customer.name}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Email</p>
                  <p className="text-white">{order.customer.email}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Phone</p>
                  <p className="text-white">{order.customer.phone}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Address</p>
                  <p className="text-white">{order.customer.address}</p>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-sm">
                  View Customer Profile
                </button>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Timeline</h2>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-6">
                    <div className="absolute left-0 top-1 w-3 h-3 bg-primary-red rounded-full"></div>
                    {index < timeline.length - 1 && (
                      <div className="absolute left-1.5 top-4 w-0.5 h-full bg-white/10"></div>
                    )}
                    <p className="text-white/60 text-xs mb-1">{item.date}</p>
                    <p className="text-white font-medium text-sm">{item.status}</p>
                    <p className="text-white/60 text-xs mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Actions</h2>
              <div className="space-y-2">
                <button
                  onClick={handleUpdateStatus}
                  className="w-full px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-crimson transition-all text-sm"
                >
                  Update Status
                </button>
                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-sm">
                  Send Email
                </button>
                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-sm">
                  Print Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
