'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchSubscriptions, deleteSubscription } from '../../utils/api';

export default function SubscriptionsPage() {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        const loadSubscriptions = async () => {
            const data = await fetchSubscriptions();
            setSubscriptions(data);
        };
        loadSubscriptions();
    }, []);

    const handleDelete = async (id) => {
        if (confirm('Möchten Sie dieses Abonnement wirklich löschen?')) {
            await deleteSubscription(id);
            setSubscriptions(subscriptions.filter(sub => sub.id !== id));
        }
    };

    return (
        <div>
            <h1>Abonnements</h1>
            <ul>
                <li><Link href="/subscriptions/add"><button>Neues Abonnement hinzufügen</button></Link></li>
                {subscriptions.map(sub => (
                    <li key={sub.id} >
                        <div style={{ width: '40%' }}>
                            <strong>{sub.name}</strong> ({sub.category})
                        </div>
                        <div>
                            {sub.monthly_price} €
                        </div>
                        <div style={{ width: '40%' }}>
                            <button onClick={() => handleDelete(sub.id)}>Löschen</button>
                            <Link href={`/subscriptions/edit/${sub.id}`}><button>Bearbeiten</button></Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}