import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
  
export default function AddResume() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg
      h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
      onClick={()=> setIsClicked(true)}>
        <PlusSquare/>
      </div>
      
      <Dialog open={isClicked}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create new Resume</DialogTitle>
      <p>Add a title for your new resume</p>
      <DialogDescription>
        <Input className="my-2" placeholder="Ex. Software Engineer"/>
      </DialogDescription>
      <div className='flex justify-end gap-5'>
          <Button onClick={()=> setIsClicked(false)} variant='ghost'>Cancel</Button>
          <Button>Create</Button>
        </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}
