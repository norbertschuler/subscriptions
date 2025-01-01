'use client'

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { createSubscription } from '../../../utils/api';
import { useRouter } from 'next/navigation';

export default function AddSubscriptionPage() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        await createSubscription(data);
        router.push('/subscriptions');
    };

    return (
        <div>
            <h1>Neues Abonnement hinzufügen</h1>
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
                <button type="submit">Hinzufügen</button>
                <Link href={`/subscriptions`}><button>Abbrechen</button></Link>
            </form>
        </div>
    );
}
