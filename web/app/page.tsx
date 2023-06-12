import LoginForm from '../components/login';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-600 flex-col items-center justify-between p-24">
      <LoginForm/>
    </main>
  );
}
