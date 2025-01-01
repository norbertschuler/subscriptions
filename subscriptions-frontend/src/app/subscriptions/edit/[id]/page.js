'use client'

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useEffect, use } from 'react';
import Link from 'next/link';
import { updateSubscription, fetchSubscriptions } from '../../../../utils/api';

export default function EditSubscriptionPage({ params }) {
    const { id } = use(params);
    const { register, handleSubmit, setValue } = useForm();
    const router = useRouter();

    useEffect(() => {
        const loadSubscription = async () => {
            const data = await fetchSubscriptions();
            const sub = data.find(sub => sub.id === parseInt(id));
            if (sub) {
                setValue('name', sub.name);
                setValue('monthly_price', sub.monthly_price);
                setValue('user', sub.user);
                setValue('payment_method', sub.payment_method);
                setValue('category', sub.category);
            }
        };
        loadSubscription();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        await updateSubscription(id, data);
        router.push('/subscriptions');
    };

    return (
        <div>
            <h1>Abonnement bearbeiten</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} placeholder="Name" required />
                <input {...register('monthly_price')} type="number" step="0.01" placeholder="Monatlicher Preis" required />
                <input {...register('user')} placeholder="Benutzer" required />
                <input {...register('payment_method')} placeholder="Zahlart" required />
                <select {...register('category')} required>
                    <option value="Telefon">Telefon</option>
                    <option value="Streaming">Streaming</option>
                    <option value="Software">Software</option>
                    <option value="Speicher">Speicher</option>
                    <option value="Media">Media</option>
                    <option value="Sonstiges">Sonstiges</option>
                </select>
                <button type="submit">Speichern</button>
                <Link href={`/subscriptions`}><button>Abbrechen</button></Link>
            </form>
        </div>
    );
}