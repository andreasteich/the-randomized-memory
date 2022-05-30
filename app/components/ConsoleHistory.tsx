type Props = {
    notifications: any[]
}

export default function ConsoleHistory({ notifications }: Props) {
    return (
        <div className="rounded-t-lg font-mono bg-black border-x-2 border-t-2 border-gray-600">
        { notifications.map(({ type, from, message }, index) => (
            <p key={index} className="text-white px-2 py-1">{from}: <strong>{message}</strong></p>
        ))}
        </div>
    )
}