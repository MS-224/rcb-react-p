import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, ImageIcon, ShoppingCart, Users, Mail, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const sections = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'news', label: 'News', icon: Newspaper },
    { key: 'gallery', label: 'Gallery', icon: ImageIcon },
    { key: 'shop', label: 'Shop', icon: ShoppingCart },
    { key: 'subscribers', label: 'Subscribers', icon: Mail },
    { key: 'users', label: 'Users', icon: Users },
];

const mockStats = {
    users: 1200,
    signups: 350,
    logins: 900,
    news: 18,
    gallery: 42,
    shopOrders: 27,
    subscribers: 400,
};

const AdminPage = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const navigate = useNavigate();

    // Gallery state
    const [galleryList, setGalleryList] = useState([
        { id: 1, type: 'image', title: 'Kohli Century', url: '', date: '2024-03-10' },
        { id: 2, type: 'video', title: 'Maxwell Sixes', url: '', date: '2024-03-08' },
    ]);
    const [editingGallery, setEditingGallery] = useState(null);
    const [showGalleryForm, setShowGalleryForm] = useState(false);
    const [galleryForm, setGalleryForm] = useState({ type: 'image', title: '', url: '', date: '' });
    const galleryFileInputRef = useRef();

    // Add/Edit Gallery
    const handleGalleryFormSubmit = (e) => {
        e.preventDefault();
        if (editingGallery) {
            setGalleryList(galleryList.map(g => g.id === editingGallery.id ? { ...editingGallery, ...galleryForm } : g));
        } else {
            setGalleryList([
                { ...galleryForm, id: Date.now(), date: new Date().toISOString().slice(0, 10) },
                ...galleryList,
            ]);
        }
        setShowGalleryForm(false);
        setEditingGallery(null);
        setGalleryForm({ type: 'image', title: '', url: '', date: '' });
    };
    // Delete Gallery
    const handleDeleteGallery = (id) => setGalleryList(galleryList.filter(g => g.id !== id));
    // Edit Gallery
    const handleEditGallery = (item) => {
        setEditingGallery(item);
        setGalleryForm(item);
        setShowGalleryForm(true);
    };
    // File upload
    const handleGalleryFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => setGalleryForm(f => ({ ...f, url: ev.target.result }));
            reader.readAsDataURL(file);
        }
    };

    // Shop state
    const [productList, setProductList] = useState([
        { id: 1, name: 'RCB Jersey', price: 2499, stock: 50, image: '', brand: 'Nike', category: 'jerseys' },
        { id: 2, name: 'RCB Cap', price: 899, stock: 100, image: '', brand: 'Nike', category: 'caps' },
    ]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showProductForm, setShowProductForm] = useState(false);
    const [productForm, setProductForm] = useState({ name: '', price: '', stock: '', image: '', brand: '', category: '' });
    const productFileInputRef = useRef();
    // Orders
    const [orderList, setOrderList] = useState([
        { id: 1, product: 'RCB Jersey', user: 'john@example.com', quantity: 2, status: 'Pending', date: '2024-03-20' },
        { id: 2, product: 'RCB Cap', user: 'jane@example.com', quantity: 1, status: 'Fulfilled', date: '2024-03-19' },
    ]);
    // Add/Edit Product
    const handleProductFormSubmit = (e) => {
        e.preventDefault();
        if (editingProduct) {
            setProductList(productList.map(p => p.id === editingProduct.id ? { ...editingProduct, ...productForm } : p));
        } else {
            setProductList([
                { ...productForm, id: Date.now(), price: Number(productForm.price), stock: Number(productForm.stock) },
                ...productList,
            ]);
        }
        setShowProductForm(false);
        setEditingProduct(null);
        setProductForm({ name: '', price: '', stock: '', image: '', brand: '', category: '' });
    };
    // Delete Product
    const handleDeleteProduct = (id) => setProductList(productList.filter(p => p.id !== id));
    // Edit Product
    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setProductForm(product);
        setShowProductForm(true);
    };
    // File upload
    const handleProductFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => setProductForm(f => ({ ...f, image: ev.target.result }));
            reader.readAsDataURL(file);
        }
    };
    // Mark order as fulfilled
    const handleFulfillOrder = (id) => setOrderList(orderList.map(o => o.id === id ? { ...o, status: 'Fulfilled' } : o));

    // Subscribers state
    const [subscribers, setSubscribers] = useState([
        { id: 1, email: 'john@example.com', date: '2024-03-10' },
        { id: 2, email: 'jane@example.com', date: '2024-03-12' },
    ]);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailForm, setEmailForm] = useState({ subject: '', message: '' });
    // Send email/news to all (mock)
    const handleSendEmail = (e) => {
        e.preventDefault();
        setShowEmailModal(false);
        setEmailForm({ subject: '', message: '' });
        alert('Email/news sent to all subscribers!');
    };

    // Users state
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', signup: '2024-03-01', lastLogin: '2024-03-20', activity: 'Booked tickets, Ordered Jersey' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', signup: '2024-03-05', lastLogin: '2024-03-19', activity: 'Subscribed News, Ordered Cap' },
    ]);

    // News state
    const [newsList, setNewsList] = useState([
        { id: 1, title: 'RCB Wins Opener!', content: 'RCB started the season with a thrilling win over Mumbai Indians. Virat Kohli scored 75 runs.', image: '', date: '2024-03-15' },
        { id: 2, title: 'New Signing Announced', content: 'RCB welcomes a new overseas player to the squad for IPL 2024.', image: '', date: '2024-03-10' },
        { id: 3, title: 'RCB Launches New Jersey', content: 'The new RCB jersey for 2024 season has been unveiled. Fans are excited!', image: '', date: '2024-03-05' },
        { id: 4, title: 'RCB Fan Event', content: 'A special event for RCB fans will be held at Chinnaswamy Stadium.', image: '', date: '2024-03-01' },
    ]);
    const [showNewsForm, setShowNewsForm] = useState(false);
    const [editingNews, setEditingNews] = useState(null);
    const [form, setForm] = useState({ title: '', content: '', image: '', date: '' });
    const newsFileInputRef = useRef();
    // Add/Edit News
    const handleNewsFormSubmit = (e) => {
        e.preventDefault();
        if (editingNews) {
            setNewsList(newsList.map(n => n.id === editingNews.id ? { ...editingNews, ...form } : n));
        } else {
            setNewsList([
                { ...form, id: Date.now(), date: new Date().toISOString().slice(0, 10) },
                ...newsList,
            ]);
        }
        setShowNewsForm(false);
        setEditingNews(null);
        setForm({ title: '', content: '', image: '', date: '' });
    };
    // Delete News
    const handleDeleteNews = (id) => setNewsList(newsList.filter(n => n.id !== id));
    // Edit News
    const handleEditNews = (news) => {
        setEditingNews(news);
        setForm(news);
        setShowNewsForm(true);
    };
    // Image upload
    const handleNewsFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => setForm(f => ({ ...f, image: ev.target.result }));
            reader.readAsDataURL(file);
        }
    };

    // Mock analytics data
    const usersOverTime = [100, 200, 400, 600, 900, 1200];
    const ordersPerDay = [2, 5, 3, 7, 4, 6, 8];
    const newsPublished = [1, 2, 1, 0, 3, 2, 1];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // CSV export utility
    function exportCSV(filename, rows) {
        if (!rows.length) return;
        const keys = Object.keys(rows[0]);
        const csv = [keys.join(','), ...rows.map(row => keys.map(k => '"' + (row[k] ?? '') + '"').join(','))].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-rcb-black via-rcb-red/10 to-rcb-gold/10">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-rcb-red to-black text-white flex flex-col py-8 px-4 shadow-xl">
                <div className="flex flex-col items-center mb-10">
                    <img src="/rcb-hero.jpg" alt="RCB Logo" className="w-20 h-20 object-contain mb-2" />
                    <span className="text-2xl font-extrabold text-rcb-gold tracking-tight">RCB Admin</span>
                    <Button
                        variant="outline"
                        className="mt-4 w-full bg-white text-rcb-red font-bold border-rcb-gold hover:bg-rcb-gold/20"
                        onClick={() => {
                            localStorage.removeItem('rcbAdminAuth');
                            navigate('/admin-login');
                        }}
                    >
                        Logout
                    </Button>
                </div>
                <nav className="flex-1 space-y-2">
                    {sections.map(({ key, label, icon: Icon }) => (
                        <Button
                            key={key}
                            variant={activeSection === key ? 'default' : 'ghost'}
                            className={`w-full justify-start px-4 py-3 rounded-lg text-lg font-semibold ${activeSection === key ? 'bg-rcb-gold text-rcb-black' : 'text-white hover:bg-rcb-gold/20'}`}
                            onClick={() => setActiveSection(key)}
                        >
                            <Icon className="mr-3 h-6 w-6" />
                            {label}
                        </Button>
                    ))}
                </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-10">
                {activeSection === 'dashboard' && (
                    <div>
                        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">Admin Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <Card className="bg-rcb-black text-rcb-gold border-rcb-gold">
                                <CardHeader><CardTitle>Users</CardTitle></CardHeader>
                                <CardContent className="text-3xl font-bold">{mockStats.users}</CardContent>
                            </Card>
                            <Card className="bg-rcb-black text-rcb-gold border-rcb-gold">
                                <CardHeader><CardTitle>Signups</CardTitle></CardHeader>
                                <CardContent className="text-3xl font-bold">{mockStats.signups}</CardContent>
                            </Card>
                            <Card className="bg-rcb-black text-rcb-gold border-rcb-gold">
                                <CardHeader><CardTitle>Logins</CardTitle></CardHeader>
                                <CardContent className="text-3xl font-bold">{mockStats.logins}</CardContent>
                            </Card>
                            <Card className="bg-rcb-black text-rcb-gold border-rcb-gold">
                                <CardHeader><CardTitle>News Articles</CardTitle></CardHeader>
                                <CardContent className="text-3xl font-bold">{mockStats.news}</CardContent>
                            </Card>
                            <Card className="bg-rcb-black text-rcb-gold border-rcb-gold">
                                <CardHeader><CardTitle>Gallery Items</CardTitle></CardHeader>
                                <CardContent className="text-3xl font-bold">{mockStats.gallery}</CardContent>
                            </Card>
                            <Card className="bg-rcb-black text-rcb-gold border-rcb-gold">
                                <CardHeader><CardTitle>Shop Orders</CardTitle></CardHeader>
                                <CardContent className="text-3xl font-bold">{mockStats.shopOrders}</CardContent>
                            </Card>
                            <Card className="bg-rcb-black text-rcb-gold border-rcb-gold">
                                <CardHeader><CardTitle>Subscribers</CardTitle></CardHeader>
                                <CardContent className="text-3xl font-bold">{mockStats.subscribers}</CardContent>
                            </Card>
                        </div>
                        {/* Analytics Charts */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {/* Users Over Time */}
                            <div className="bg-white rounded-xl shadow p-6 border-2 border-rcb-gold">
                                <h2 className="text-lg font-bold mb-2 text-rcb-red">Users Over Time</h2>
                                <svg width="100%" height="120" viewBox="0 0 200 120">
                                    <polyline
                                        fill="none"
                                        stroke="#D4AF37"
                                        strokeWidth="3"
                                        points={usersOverTime.map((v, i) => `${i * 40},${120 - v / 12}`).join(' ')}
                                    />
                                    {usersOverTime.map((v, i) => (
                                        <circle key={i} cx={i * 40} cy={120 - v / 12} r="4" fill="#D4AF37" />
                                    ))}
                                </svg>
                                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                    {usersOverTime.map((_, i) => <span key={i}>{i + 1}</span>)}
                                </div>
                            </div>
                            {/* Orders Per Day */}
                            <div className="bg-white rounded-xl shadow p-6 border-2 border-rcb-gold">
                                <h2 className="text-lg font-bold mb-2 text-rcb-red">Orders Per Day</h2>
                                <svg width="100%" height="120" viewBox="0 0 200 120">
                                    {ordersPerDay.map((v, i) => (
                                        <rect key={i} x={i * 28 + 10} y={120 - v * 12} width="18" height={v * 12} fill="#D4AF37" />
                                    ))}
                                </svg>
                                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                    {days.map((d, i) => <span key={i}>{d}</span>)}
                                </div>
                            </div>
                            {/* News Published */}
                            <div className="bg-white rounded-xl shadow p-6 border-2 border-rcb-gold">
                                <h2 className="text-lg font-bold mb-2 text-rcb-red">News Published</h2>
                                <svg width="100%" height="120" viewBox="0 0 200 120">
                                    {newsPublished.map((v, i) => (
                                        <rect key={i} x={i * 28 + 10} y={120 - v * 30} width="18" height={v * 30} fill="#D4AF37" />
                                    ))}
                                </svg>
                                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                    {days.map((d, i) => <span key={i}>{d}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'news' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">Manage News</h1>
                            <div className="flex gap-2">
                                <Button className="bg-rcb-gold text-rcb-black font-bold" onClick={() => { setShowNewsForm(true); setEditingNews(null); setForm({ title: '', content: '', image: '', date: '' }); }}>Add News</Button>
                                <Button variant="outline" onClick={() => exportCSV('news.csv', newsList)}>Export CSV</Button>
                            </div>
                        </div>
                        {/* News Form Modal */}
                        {showNewsForm && (
                            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg relative">
                                    <button className="absolute top-4 right-4 text-rcb-red text-2xl font-bold" onClick={() => setShowNewsForm(false)}>&times;</button>
                                    <h2 className="text-2xl font-bold mb-4">{editingNews ? 'Edit News' : 'Add News'}</h2>
                                    <form onSubmit={handleNewsFormSubmit} className="space-y-4">
                                        <div>
                                            <label className="block font-medium mb-1">Title</label>
                                            <input type="text" className="w-full border rounded-lg p-2" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Content</label>
                                            <textarea className="w-full border rounded-lg p-2 min-h-[100px]" value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} required />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Image</label>
                                            <input type="file" accept="image/*" ref={newsFileInputRef} onChange={handleNewsFileChange} className="mb-2" />
                                            {form.image && <img src={form.image} alt="Preview" className="w-32 h-32 object-cover rounded-lg border mb-2" />}
                                        </div>
                                        <div className="flex gap-4 mt-6">
                                            <Button type="submit" className="bg-rcb-red text-white font-bold flex-1">{editingNews ? 'Update' : 'Add'} News</Button>
                                            <Button type="button" variant="outline" className="flex-1" onClick={() => setShowNewsForm(false)}>Cancel</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {/* News List */}
                        <h2 className="text-xl font-bold mb-4">News Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {newsList.map(news => (
                                <Card key={news.id} className="bg-white border-2 border-rcb-gold">
                                    {news.image && <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-t-lg" />}
                                    <CardHeader>
                                        <CardTitle className="text-rcb-red">{news.title}</CardTitle>
                                        <div className="text-xs text-muted-foreground mb-2">{news.date}</div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{news.content}</p>
                                        <div className="flex gap-2 mt-4">
                                            <Button size="sm" className="bg-rcb-gold text-rcb-black font-bold" onClick={() => handleEditNews(news)}>Edit</Button>
                                            <Button size="sm" variant="destructive" onClick={() => handleDeleteNews(news.id)}>Delete</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
                {activeSection === 'gallery' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">Manage Gallery</h1>
                            <div className="flex gap-2">
                                <Button className="bg-rcb-gold text-rcb-black font-bold" onClick={() => { setShowGalleryForm(true); setEditingGallery(null); setGalleryForm({ type: 'image', title: '', url: '', date: '' }); }}>Add Item</Button>
                                <Button variant="outline" onClick={() => exportCSV('gallery.csv', galleryList)}>Export CSV</Button>
                            </div>
                        </div>
                        {/* Gallery Form Modal */}
                        {showGalleryForm && (
                            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg relative">
                                    <button className="absolute top-4 right-4 text-rcb-red text-2xl font-bold" onClick={() => setShowGalleryForm(false)}>&times;</button>
                                    <h2 className="text-2xl font-bold mb-4">{editingGallery ? 'Edit Item' : 'Add Gallery Item'}</h2>
                                    <form onSubmit={handleGalleryFormSubmit} className="space-y-4">
                                        <div>
                                            <label className="block font-medium mb-1">Type</label>
                                            <select className="w-full border rounded-lg p-2" value={galleryForm.type} onChange={e => setGalleryForm(f => ({ ...f, type: e.target.value }))}>
                                                <option value="image">Image</option>
                                                <option value="video">Video</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Title</label>
                                            <input type="text" className="w-full border rounded-lg p-2" value={galleryForm.title} onChange={e => setGalleryForm(f => ({ ...f, title: e.target.value }))} required />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">{galleryForm.type === 'image' ? 'Image' : 'Video'} File</label>
                                            <input type="file" accept={galleryForm.type === 'image' ? 'image/*' : 'video/*'} ref={galleryFileInputRef} onChange={handleGalleryFileChange} className="mb-2" />
                                            {galleryForm.url && galleryForm.type === 'image' && <img src={galleryForm.url} alt="Preview" className="w-32 h-32 object-cover rounded-lg border mb-2" />}
                                            {galleryForm.url && galleryForm.type === 'video' && <video src={galleryForm.url} controls className="w-32 h-32 object-cover rounded-lg border mb-2" />}
                                        </div>
                                        <div className="flex gap-4 mt-6">
                                            <Button type="submit" className="bg-rcb-red text-white font-bold flex-1">{editingGallery ? 'Update' : 'Add'} Item</Button>
                                            <Button type="button" variant="outline" className="flex-1" onClick={() => setShowGalleryForm(false)}>Cancel</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {/* Gallery List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleryList.map(item => (
                                <Card key={item.id} className="bg-white border-2 border-rcb-gold">
                                    {item.type === 'image' && item.url && <img src={item.url} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />}
                                    {item.type === 'video' && item.url && <video src={item.url} controls className="w-full h-40 object-cover rounded-t-lg" />}
                                    <CardHeader>
                                        <CardTitle className="text-rcb-red">{item.title}</CardTitle>
                                        <div className="text-xs text-muted-foreground mb-2">{item.date}</div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex gap-2">
                                            <Button size="sm" className="bg-rcb-gold text-rcb-black font-bold" onClick={() => handleEditGallery(item)}>Edit</Button>
                                            <Button size="sm" variant="destructive" onClick={() => handleDeleteGallery(item.id)}>Delete</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
                {activeSection === 'shop' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">Manage Shop</h1>
                            <div className="flex gap-2">
                                <Button className="bg-rcb-gold text-rcb-black font-bold" onClick={() => { setShowProductForm(true); setEditingProduct(null); setProductForm({ name: '', price: '', stock: '', image: '', brand: '', category: '' }); }}>Add Product</Button>
                                <Button variant="outline" onClick={() => exportCSV('products.csv', productList)}>Export Products CSV</Button>
                            </div>
                        </div>
                        {/* Product Form Modal */}
                        {showProductForm && (
                            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg relative">
                                    <button className="absolute top-4 right-4 text-rcb-red text-2xl font-bold" onClick={() => setShowProductForm(false)}>&times;</button>
                                    <h2 className="text-2xl font-bold mb-4">{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
                                    <form onSubmit={handleProductFormSubmit} className="space-y-4">
                                        <div>
                                            <label className="block font-medium mb-1">Name</label>
                                            <input type="text" className="w-full border rounded-lg p-2" value={productForm.name} onChange={e => setProductForm(f => ({ ...f, name: e.target.value }))} required />
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <label className="block font-medium mb-1">Price</label>
                                                <input type="number" className="w-full border rounded-lg p-2" value={productForm.price} onChange={e => setProductForm(f => ({ ...f, price: e.target.value }))} required />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block font-medium mb-1">Stock</label>
                                                <input type="number" className="w-full border rounded-lg p-2" value={productForm.stock} onChange={e => setProductForm(f => ({ ...f, stock: e.target.value }))} required />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Brand</label>
                                            <input type="text" className="w-full border rounded-lg p-2" value={productForm.brand} onChange={e => setProductForm(f => ({ ...f, brand: e.target.value }))} required />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Category</label>
                                            <input type="text" className="w-full border rounded-lg p-2" value={productForm.category} onChange={e => setProductForm(f => ({ ...f, category: e.target.value }))} required />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Image</label>
                                            <input type="file" accept="image/*" ref={productFileInputRef} onChange={handleProductFileChange} className="mb-2" />
                                            {productForm.image && <img src={productForm.image} alt="Preview" className="w-32 h-32 object-cover rounded-lg border mb-2" />}
                                        </div>
                                        <div className="flex gap-4 mt-6">
                                            <Button type="submit" className="bg-rcb-red text-white font-bold flex-1">{editingProduct ? 'Update' : 'Add'} Product</Button>
                                            <Button type="button" variant="outline" className="flex-1" onClick={() => setShowProductForm(false)}>Cancel</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {/* Product List */}
                        <h2 className="text-xl font-bold mb-4 mt-8">Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {productList.map(product => (
                                <Card key={product.id} className="bg-white border-2 border-rcb-gold">
                                    {product.image && <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />}
                                    <CardHeader>
                                        <CardTitle className="text-rcb-red">{product.name}</CardTitle>
                                        <div className="text-xs text-muted-foreground mb-2">{product.brand} | {product.category}</div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-2 text-lg font-bold">₹{product.price}</div>
                                        <div className="mb-2 text-sm">Stock: {product.stock}</div>
                                        <div className="flex gap-2">
                                            <Button size="sm" className="bg-rcb-gold text-rcb-black font-bold" onClick={() => handleEditProduct(product)}>Edit</Button>
                                            <Button size="sm" variant="destructive" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        {/* Orders List */}
                        <h2 className="text-xl font-bold mb-4">Orders</h2>
                        <div className="flex gap-2 mb-2">
                            <Button variant="outline" onClick={() => exportCSV('orders.csv', orderList)}>Export Orders CSV</Button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border-2 border-rcb-gold rounded-xl">
                                <thead>
                                    <tr className="bg-rcb-gold text-rcb-black">
                                        <th className="py-2 px-4">Order ID</th>
                                        <th className="py-2 px-4">Product</th>
                                        <th className="py-2 px-4">User</th>
                                        <th className="py-2 px-4">Quantity</th>
                                        <th className="py-2 px-4">Date</th>
                                        <th className="py-2 px-4">Status</th>
                                        <th className="py-2 px-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderList.map(order => (
                                        <tr key={order.id} className="border-b">
                                            <td className="py-2 px-4">{order.id}</td>
                                            <td className="py-2 px-4">{order.product}</td>
                                            <td className="py-2 px-4">{order.user}</td>
                                            <td className="py-2 px-4">{order.quantity}</td>
                                            <td className="py-2 px-4">{order.date}</td>
                                            <td className="py-2 px-4 font-bold {order.status === 'Fulfilled' ? 'text-green-600' : 'text-rcb-red'}">{order.status}</td>
                                            <td className="py-2 px-4">
                                                {order.status === 'Pending' && (
                                                    <Button size="sm" className="bg-green-600 text-white font-bold" onClick={() => handleFulfillOrder(order.id)}>Mark Fulfilled</Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {activeSection === 'subscribers' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">Manage Subscribers</h1>
                            <div className="flex gap-2">
                                <Button className="bg-rcb-gold text-rcb-black font-bold" onClick={() => setShowEmailModal(true)}>Send Email/News</Button>
                                <Button variant="outline" onClick={() => exportCSV('subscribers.csv', subscribers)}>Export CSV</Button>
                            </div>
                        </div>
                        {/* Email Modal */}
                        {showEmailModal && (
                            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg relative">
                                    <button className="absolute top-4 right-4 text-rcb-red text-2xl font-bold" onClick={() => setShowEmailModal(false)}>&times;</button>
                                    <h2 className="text-2xl font-bold mb-4">Send Email/News to All Subscribers</h2>
                                    <form onSubmit={handleSendEmail} className="space-y-4">
                                        <div>
                                            <label className="block font-medium mb-1">Subject</label>
                                            <input type="text" className="w-full border rounded-lg p-2" value={emailForm.subject} onChange={e => setEmailForm(f => ({ ...f, subject: e.target.value }))} required />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Message</label>
                                            <textarea className="w-full border rounded-lg p-2 min-h-[100px]" value={emailForm.message} onChange={e => setEmailForm(f => ({ ...f, message: e.target.value }))} required />
                                        </div>
                                        <div className="flex gap-4 mt-6">
                                            <Button type="submit" className="bg-rcb-red text-white font-bold flex-1">Send</Button>
                                            <Button type="button" variant="outline" className="flex-1" onClick={() => setShowEmailModal(false)}>Cancel</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {/* Subscribers List */}
                        <h2 className="text-xl font-bold mb-4">Subscribers</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border-2 border-rcb-gold rounded-xl">
                                <thead>
                                    <tr className="bg-rcb-gold text-rcb-black">
                                        <th className="py-2 px-4">ID</th>
                                        <th className="py-2 px-4">Email</th>
                                        <th className="py-2 px-4">Subscribed On</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subscribers.map(sub => (
                                        <tr key={sub.id} className="border-b">
                                            <td className="py-2 px-4">{sub.id}</td>
                                            <td className="py-2 px-4">{sub.email}</td>
                                            <td className="py-2 px-4">{sub.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {activeSection === 'users' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">Manage Users</h1>
                            <Button variant="outline" onClick={() => exportCSV('users.csv', users)}>Export CSV</Button>
                        </div>
                        {/* Users List */}
                        <h2 className="text-xl font-bold mb-4">Users</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border-2 border-rcb-gold rounded-xl">
                                <thead>
                                    <tr className="bg-rcb-gold text-rcb-black">
                                        <th className="py-2 px-4">ID</th>
                                        <th className="py-2 px-4">Name</th>
                                        <th className="py-2 px-4">Email</th>
                                        <th className="py-2 px-4">Signup Date</th>
                                        <th className="py-2 px-4">Last Login</th>
                                        <th className="py-2 px-4">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id} className="border-b">
                                            <td className="py-2 px-4">{user.id}</td>
                                            <td className="py-2 px-4">{user.name}</td>
                                            <td className="py-2 px-4">{user.email}</td>
                                            <td className="py-2 px-4">{user.signup}</td>
                                            <td className="py-2 px-4">{user.lastLogin}</td>
                                            <td className="py-2 px-4">{user.activity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {/* Other sections will be implemented next */}
            </main>
        </div>
    );
};

export default AdminPage; 