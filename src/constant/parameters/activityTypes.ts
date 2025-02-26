const ACTIVITY_TYPES: Record<string, { title: string; description: string }> = {
  subscription_purchase: {
    title: "Pembelian Berlangganan",
    description: "melakukan pembelian berlangganan",
  },
  payment: {
    title: "Pembayaran",
    description: "melakukan pembelian berlangganan",
  },
  name_update: {
    title: "Update Nama",
    description: "melakukan pembelian berlangganan",
  },
  email_update: {
    title: "Update Email",
    description: "melakukan update email",
  },
  pasword_update: {
    title: "Update Password",
    description: "melakukan update password",
  },
};

export { ACTIVITY_TYPES };
