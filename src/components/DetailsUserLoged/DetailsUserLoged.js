import React from 'react'
import userAvatar from "../../assets/img/common/user-avatar-example.png"

export const DetailsUserLoged = () => {
    return (
        <div className="flex justify-between items-center">
            <img className="w-10 rounded-full mr-4" src={userAvatar}/>
            <div className="flex flex-col">
                <span className="font-bold text-xl">Empresa SA.</span>
                <span className="text-xl">Proveedor</span>
            </div>
        </div>
    )
}
