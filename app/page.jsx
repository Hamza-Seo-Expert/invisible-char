import { redirect } from 'next/navigation';

// Redirect bare root "/" to the English homepage
export default function RootPage() {
  redirect('/en/invisible-character');
}
