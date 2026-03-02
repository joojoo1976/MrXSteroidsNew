export class PaymentService {
    private static instance: PaymentService;
    private sdkLoaded: boolean = false;

    private constructor() {
        if (typeof window !== 'undefined') {
            // @ts-expect-error - Global window property from SpaceRemit SDK
            window.SP_SUCCESSFUL_PAYMENT = (code: string) => {
                this.handleSuccessCallback(code);
            };
        }
    }

    public static getInstance(): PaymentService {
        if (!PaymentService.instance) {
            PaymentService.instance = new PaymentService();
        }
        return PaymentService.instance;
    }

    public async initSDK(): Promise<void> {
        if (this.sdkLoaded) return;
        if (typeof window === 'undefined') return;

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://js.spaceremit.com/v1/spaceremit.js';
            script.async = true;
            script.onload = () => {
                this.sdkLoaded = true;
                resolve();
            };
            script.onerror = () => reject(new Error('Failed to load SpaceRemit SDK'));
            document.head.appendChild(script);
        });
    }

    public async initiatePayment(amount: number, currency: string, metadata: Record<string, unknown>) {
        await this.initSDK();

        // @ts-expect-error - Global window property from SpaceRemit SDK
        if (window.SpaceRemit) {
            const transactionId = `MRX_${Date.now()}`;

            // @ts-expect-error - Global window property from SpaceRemit SDK
            window.SpaceRemit.Pay({
                amount,
                currency,
                transactionId,
                metadata,
                onSuccess: (res: unknown) => {
                    console.log('Payment successful', res);
                    // Custom event for UI to listen to
                    window.dispatchEvent(new CustomEvent('payment_success', { detail: res }));
                },
                onCancel: () => {
                    console.log('Payment cancelled');
                    window.dispatchEvent(new CustomEvent('payment_cancelled'));
                },
                onError: (err: unknown) => {
                    console.error('Payment error', err);
                    window.dispatchEvent(new CustomEvent('payment_error', { detail: err }));
                }
            });
        } else {
            throw new Error('SpaceRemit SDK not initialized');
        }
    }

    public handleSuccessCallback(code: string) {
        console.log('SpaceRemit Global Success Callback triggered:', code);
        window.dispatchEvent(new CustomEvent('payment_success_global', { detail: { code } }));
    }
}
