import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ThemeButton from './ThemeButton';

function Navbar() {
  return (
    <nav className='max-w-2xl mx-auto py-4 flex justify-between'>
      <div className='flex gap-x-4'>
        <Button
          asChild
          className='w-32'
        >
          <Link href='/'>Home</Link>
        </Button>
        <Button
          asChild
          className='w-32'
        >
          <Link href='/daily'>Daily</Link>
        </Button>
        {/* <Button
          asChild
          className='w-32'
        >
          <Link href='/prisma-example'>Example</Link>
        </Button> */}
      </div>

      <ThemeButton />
    </nav>
  );
}
export default Navbar;
