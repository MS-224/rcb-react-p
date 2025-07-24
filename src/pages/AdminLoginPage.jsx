import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'rcb2024';

const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === ADMIN_USER && password === ADMIN_PASS) {
            localStorage.setItem('rcbAdminAuth', 'true');
            navigate('/admin');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left: Logo and gradient */}
            <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-rcb-red to-black p-8">
                <div className="flex flex-col items-center">
                    <img src="/rcb-hero.jpg" alt="RCB Logo" className="w-72 h-72 object-contain mb-6" />
                    <div className="text-center">
                        <span className="block text-6xl font-extrabold text-rcb-gold tracking-tight mb-2">RCB</span>
                        <span className="block text-xl font-semibold text-rcb-gold tracking-wide">ADMIN LOGIN</span>
                    </div>
                </div>
            </div>
            {/* Right: Form */}
            <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-rcb-black via-rcb-red/10 to-rcb-gold/10 p-4 min-h-screen">
                <Card className="w-full max-w-md p-8 relative">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
                            Admin Login
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block font-medium mb-1">Username</label>
                                <Input
                                    type="text"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    className="py-4 text-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Password</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="py-4 text-lg"
                                    required
                                />
                            </div>
                            {error && <div className="text-red-600 font-bold text-center">{error}</div>}
                            <Button type="submit" className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white text-lg py-4 rounded-xl font-bold">
                                Login
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminLoginPage; 