import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <Link href="/">
          <div className="font-bold">Next Auth</div>
        </Link>
        <div className="flex gap-10">
          <Link href="/admin">Admin</Link>
          <Link href="/clientMember">Client Member</Link>
          <Link href="/member">Member</Link>
          <Link href="/open">Public</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
