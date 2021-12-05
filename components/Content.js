import { ChevronDownIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import { shuffle } from 'lodash';

const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
];

function Content() {
    const {data: session } = useSession();
    const [color, setColor] = useState(null);

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [])

    return (
        <div className="flex-grow">
            <header className="absolute top-5 right-8">
                <div className="flex items-center bg-red-200 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
                    <img className="rounded-full w-10 h-10" src={session?.user.image} alt="" />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="h-5 w-5" />
                </div>
            </header>

            <section className={`bg-gradient-to-b to-black ${color} h-80 flex items-end space-x-7 p-8 text-white`}>
                <h1>Hello</h1>
            </section>

        </div>
    )
}

export default Content
