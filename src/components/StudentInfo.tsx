import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function StudentInfo() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="secondary">Supatchok Pimsan</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className={"font-size-xl"}>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4 ">
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="src/assets/Rick_Sanchez.png"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardTitle>Supatchok Pimsan</CardTitle>
              <CardDescription>
                คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
              </CardDescription>
              <p>
                <Badge >Hobbies</Badge>
                &nbsp;&nbsp;
                เล่นเกม, ดู youtube
              </p>
              <p>
                <Badge>Email</Badge>
                &nbsp;&nbsp;
                supatchok_p@cmu.ac.th
              </p>
              <p>
                <Badge >Social</Badge>
                &nbsp;&nbsp;
                ig: _fxm.mm
              </p>

            </CardHeader>
            <CardFooter>
              <h1>รหัสนักศึกษา: 680610724</h1>
            </CardFooter>
          </Card>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  );
}
