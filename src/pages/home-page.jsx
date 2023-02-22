import {Link} from "react-router-dom";
import users from "../users.json";

export default function HomePage() {
    console.log(users);
    return (
        <div className="grid justify-items-center my-8">
            {users.map((data, index) => {
                return (
                    <>
                        <Link key={index} to={`/profile/${index}`} className="w-2/3 mb-3">
                            <div className="bg-gray-700 flex items-center rounded-lg p-3">
                                <img src={data.image} alt="" className="h-24 w-24 object-cover rounded-full" />
                                <div className="ml-4 grid gap-3">
                                    <p className="text-white">@{data.username}</p>
                                    <p className="text-white">Followers: {data.follower}</p>
                                </div>
                            </div>
                        </Link>
                    </>
                );
            })}
        </div>
    );
}
