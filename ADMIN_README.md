# Marion Autos Admin Dashboard

A comprehensive, modern admin dashboard for managing the Marion Autos international auto dealership.

## 🚀 Features

### ✅ Dashboard Overview
- Real-time metrics (Revenue, Orders, Inventory, Customers)
- Sales overview charts (Line & Pie charts)
- Recent orders and activity feed
- Performance indicators

### ✅ Vehicle Management
- **Vehicle Listing**: Search, filter by status/location
- **Add Vehicle**: Comprehensive form with all vehicle details
- **Edit Vehicle**: Update existing vehicle information
- **Image Upload**: Drag-and-drop interface for vehicle images
- **Featured Vehicles**: Mark vehicles to display prominently
- Stats: Total, Active, Sold, Featured vehicles

### ✅ Order Management
- **Order Listing**: View all orders with search and filters
- **Order Details**: Complete order information page
- **Order Timeline**: Track order progress from placement to delivery
- **Invoice Generation**: Generate invoices for orders
- Stats: Total, Pending, Shipped, Delivered orders

### ✅ Customer Management
- **Customer Listing**: View all customers with search
- **Customer Profiles**: Name, email, phone, address
- **Purchase History**: Track orders and spending per customer
- **Messaging**: Send messages to customers
- Stats: Total customers, active customers, total orders, total revenue

### ✅ Content Management System
- **WYSIWYG Editor**: Rich text editor using React Quill
- **About Page**: Manage dealership information
- **Services**: Edit service descriptions
- **FAQ Management**: Add, edit, delete FAQs
- **Blog Posts**: Create and manage blog content

### ✅ Shipping & Logistics
- **Active Shipments**: Track vehicles in transit
- **Duty Calculator**: Calculate import duties and taxes
- **Shipping Zones**: Manage rates for different regions
- **Tracking Numbers**: Monitor shipment progress
- **Customs Status**: Track customs clearance
- Stats: Active shipments, in transit, at customs, delivered

### ✅ Analytics & Reports
- **Key Metrics**: Avg. sale value, conversion rate, days to sell, repeat customers
- **Revenue Trends**: Line chart showing revenue and orders over time
- **Category Performance**: Bar chart for vehicle categories
- **Top Performers**: Best-selling vehicles and customers
- **Growth Indicators**: Percentage changes for all metrics

### ✅ Settings
- **General Settings**: Dealership name, contact, address
- **Currency & Tax**: Configure default currency and tax rates
- **Shipping Zones**: Set shipping costs per region
- **Duty Calculator**: Default duty rate configuration
- **User Management**: Add/manage admin users and roles
- **Notifications**: Configure email and system notifications

## 🎨 Design Features

- **Glass-morphism UI**: Modern translucent design
- **Brand Colors**: Marion Autos red (#DC143C, #C41E3A)
- **Responsive**: Works on desktop, tablet, and mobile
- **Dark Theme**: Elegant dark background with contrasts
- **Smooth Animations**: Transitions and hover effects
- **Interactive Charts**: Recharts library for data visualization

## 📁 Project Structure

```
app/
├── admin/
│   ├── page.tsx                    # Dashboard home
│   ├── vehicles/
│   │   ├── page.tsx               # Vehicle listing
│   │   ├── add/page.tsx           # Add vehicle form
│   │   └── [id]/edit/page.tsx     # Edit vehicle form
│   ├── orders/
│   │   ├── page.tsx               # Order listing
│   │   └── [id]/page.tsx          # Order details
│   ├── customers/page.tsx          # Customer management
│   ├── content/
│   │   ├── page.tsx               # Content management
│   │   └── quill.css              # Rich editor styles
│   ├── shipping/page.tsx           # Shipping & duty calculator
│   ├── analytics/page.tsx          # Analytics & reports
│   └── settings/page.tsx           # Settings
├── api/
│   ├── vehicles/
│   │   ├── route.ts               # GET, POST vehicles
│   │   └── [id]/route.ts          # GET, PUT, DELETE vehicle
│   ├── orders/route.ts             # Order API
│   └── customers/route.ts          # Customer API
└── components/
    └── admin/
        ├── AdminLayout.tsx         # Main layout wrapper
        ├── AdminSidebar.tsx        # Navigation sidebar
        └── AdminHeader.tsx         # Top header
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Rich Text Editor**: React Quill
- **Icons**: Heroicons (via SVG)

## 🚦 Getting Started

1. **Navigate to Admin Dashboard**
   ```
   http://localhost:3000/admin
   ```

2. **Main Navigation Sections**
   - Dashboard - Overview and metrics
   - Vehicles - Manage inventory
   - Orders - Track purchases
   - Customers - Customer database
   - Content - Website content
   - Shipping - Logistics and calculator
   - Analytics - Reports and insights
   - Settings - Configuration

## 📊 Sample Data

The dashboard currently uses sample/mock data for demonstration. In production:

1. Replace mock data with actual database queries
2. Connect to PostgreSQL, MongoDB, or your preferred database
3. Implement authentication and authorization
4. Add file upload to cloud storage (AWS S3, Cloudinary)
5. Connect payment gateway
6. Add email service integration

## 🔐 Security Notes

**Important**: Before deploying to production:

- [ ] Add authentication middleware to all `/admin` routes
- [ ] Implement role-based access control (RBAC)
- [ ] Secure API routes with authentication
- [ ] Add CSRF protection
- [ ] Validate and sanitize all inputs
- [ ] Add rate limiting to API endpoints
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS only

## 🎯 Next Steps for Production

1. **Database Integration**
   - Set up PostgreSQL/MongoDB
   - Create database schemas
   - Replace mock data with actual queries

2. **Authentication**
   - Implement NextAuth.js or similar
   - Add login/logout functionality
   - Protect admin routes

3. **File Upload**
   - Integrate cloud storage (S3, Cloudinary)
   - Add image optimization
   - Implement upload progress

4. **Email Service**
   - Set up SendGrid/Mailgun
   - Add email templates
   - Implement notification system

5. **Payment Integration**
   - Connect payment gateway
   - Add payment tracking
   - Implement refund system

## 📝 API Endpoints

### Vehicles
- `GET /api/vehicles` - Get all vehicles
- `POST /api/vehicles` - Create vehicle
- `GET /api/vehicles/[id]` - Get single vehicle
- `PUT /api/vehicles/[id]` - Update vehicle
- `DELETE /api/vehicles/[id]` - Delete vehicle

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create order

### Customers
- `GET /api/customers` - Get all customers
- `POST /api/customers` - Create customer

## 🤝 Contributing

This is a private project for Marion Autos. For any questions or issues, contact the development team.

## 📄 License

Proprietary - Marion Autos © 2024

---

**Built with ❤️ for Marion Autos**
