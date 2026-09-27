import { Injectable, signal } from '@angular/core';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ToastMessage {
  message: string;
  title?: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToasterService {
  readonly currentToast = signal<ToastMessage | null>(null);

  show(message: string, type: ToastType = 'info', title = ''): void {
    this.currentToast.set({ message, type, title });
  }

  dismiss(): void {
    this.currentToast.set(null);
  }
}