"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Loader, Loader2Icon } from "lucide-react"
import toast from "react-hot-toast"
import { ToggleFollow } from "@/actions/user.action"

function FollowButton({userId}: {userId: string}) {
    const[isLoading, setIsLoading] = useState(false)
    
    const handleFollow = async () =>{
        setIsLoading(true);

        try {
            await ToggleFollow(userId)
        } catch (error) {
            toast.error("Error Following user");
            console.log("Error Following user", error);
        }finally{

        }setIsLoading(false);
    };
  return (
    <Button
    size={"sm"}
    variant={"secondary"}
    onClick={handleFollow}
    disabled={isLoading}
    className="w-20"
    >
    {isLoading ? <Loader2Icon className="w-4 h-4 animate-spin"/> : "Follow"}

    </Button>
  )
}

export default FollowButton