"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
interface ModalProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
  footer,
  className,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className=" overflow-hidden p-0 ">
        {title && (
          <DialogHeader className="border-b">
            <DialogTitle className="f p-4 text-[18px] font-normal">
              {title}
            </DialogTitle>
          </DialogHeader>
        )}
        <div
          className={cn(
            " px-4 overflow-y-auto mb-4 no-scrollbar relative",
            className,
          )}
        >
          <button className="absolute h-0  p-0"></button>
          {children}
        </div>
        {footer && <DialogFooter className="">{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};
