import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
    phone: string;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        phone: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="flex min-h-screen">
            <Head title="Masuk Portal Santri" />

            {/* Left Side - Background Image with Quote */}
            <div className="relative hidden bg-cover bg-center lg:flex lg:w-1/2">
                <img
                    src="/sidebar.png"
                    className="absolute inset-0 max-h-screen w-full bg-gradient-to-br from-green-800/80 to-green-900/90 object-cover"
                    alt=""
                />
                <div className="relative z-10 flex w-full items-end justify-start bg-gradient-to-br from-transparent to-gray-950/40 p-12">
                    <div className="max-w-lg text-white">
                        <blockquote className="text-lg leading-relaxed font-medium">
                            "Kesunyian malam di pesantren bukanlah kekosongan, melainkan ruang suci di mana jiwamu berdialog dengan langit tanpa
                            perantara kata."
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex w-full items-center justify-center bg-gray-50 p-8 lg:w-1/2">
                <div className="w-full max-w-md md:w-96">
                    {/* Logo and Title */}
                    <div className="mb-8 text-center">
                        <img src="/logo.png" className="mx-auto w-28" alt="" />

                        <h1 className="mb-2 text-2xl font-bold text-gray-900">Masuk Portal Santri</h1>
                        <p className="text-sm text-gray-600">Satu Pintu untuk Seluruh Kebutuhan Akademik</p>
                    </div>

                    {status && (
                        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-3 text-center text-sm font-medium text-green-700">
                            {status}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={submit}>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder=""
                                    className="w-full rounded-lg border border-gray-300 px-4 py-5 transition-colors !text-black focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div>
                                <Label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                                    Kata Sandi
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder=""
                                    className="w-full rounded-lg border border-gray-300 px-4 py-5 transition-colors !text-black focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onClick={() => setData('remember', !data.remember)}
                                        tabIndex={3}
                                        className="text-primary focus:ring-emerald-500"
                                    />
                                    <Label htmlFor="remember" className="text-sm text-gray-600">
                                        Ingat saya
                                    </Label>
                                </div>
                                {canResetPassword && (
                                    <TextLink
                                        href={route('password.request')}
                                        className="text-sm text-primary hover:text-emerald-700"
                                        tabIndex={5}
                                    >
                                        Lupa kata sandi?
                                    </TextLink>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="flex w-full items-center justify-center space-x-2 rounded-lg bg-emerald-700 px-4 py-5 font-medium text-white transition-colors hover:bg-emerald-800"
                                tabIndex={4}
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                <span>Masuk</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
