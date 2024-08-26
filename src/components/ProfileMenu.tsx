import { useRef, useState } from "react";
import { useAuth } from "../context/auth";
import { useClickAway } from "react-use";

const ProfileMenu = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLButtonElement>(null);
    const { user, signOut } = useAuth();
    const [open, setOpen] = useState(false);


    useClickAway(divRef, (event: Event) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpen(false)
        }
    });

    const handleToggle = () => {
        setOpen(x => !x)
    }



    return (
        <div className="relative">
            <button ref={menuRef} onClick={handleToggle} className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=320&amp;h=320&amp;q=80" alt="Image Description" />
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <div ref={divRef} className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${open ? "" : "hidden"}`} style={{ position: "absolute", top: "45px", right: 0 }}>
                <div className="px-4 py-3 text-sm text-gray-900">
                    <div>{user?.name}</div>
                    <div className="font-medium truncate">{user?.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownInformationButton">
                    <li>
                        <div className="px-4 text-xs">Employee ID</div>
                        <div className="block px-4 py-2 text-sm text-gray-700">{Number(user?.employee_id)}</div>
                    </li>
                    <li>
                        <div className="px-4 text-xs">Phone</div>
                        <div className="block px-4 py-2 text-sm text-gray-700">{user?.phone}</div>
                    </li>
                    <li>
                        <div className="px-4 text-xs">Role</div>
                        <div className="block px-4 py-2 text-sm text-gray-700">{user?.role}</div>
                    </li>
                </ul>
                <div className="py-2">
                    <a href="#" onClick={signOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileMenu;