import { IProvince } from '../interfaces/IProvince';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';
interface InfoSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  province: IProvince | null;
}

export default function InfoSheet({ open, onOpenChange, province }: InfoSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{province ? province.name : 'No Information'}</SheetTitle>
          <SheetDescription>
            {province
              ? 'Content not available (data will be added later)'
              : 'Please select a province'}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
