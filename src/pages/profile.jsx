import {useParams} from "react-router-dom";
import users from "../users.json";

export default function Profile() {
    const params = useParams();
    return (
        <div className="grid justify-items-center my-20">
            <div className="bg-gray-600 w-2/3 grid justify-items-center rounded-lg py-10">
                <img src={users[params.id].image} className="w-32 h-32 object-cover rounded-full border-2 border-red-500" alt="" />
                <p className="text-white text-2xl mb-3">{users[params.id].username}</p>
                <div className="flex gap-10">
                    <div className="grid gap-3 text-center">
                        <p className="text-white text-2xl">{users[params.id].follower}</p>
                        <p className="text-white text-2xl">Followers</p>
                    </div>
                    <div className="grid gap-3 text-center">
                        <p className="text-white text-2xl">{users[params.id].following}</p>
                        <p className="text-white text-2xl">Following</p>
                    </div>
                </div>
            </div>
            <a href="/" className="py-2 px-4 bg-gray-600 rounded-lg mt-3 text-white">
                Back
            </a>
        </div>
    );
}
