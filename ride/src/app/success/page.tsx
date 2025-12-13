export default function SuccessPage() {
    return (
        <main>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center h-screen gap-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-75 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-green-400 to-green-500 h-32 w-32 flex items-center justify-center rounded-full shadow-2xl transform hover:scale-110 transition-transform">
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-green-400 drop-shadow-lg">Success!</h1>
                <p className="text-gray-400 text-lg">Your request was completed successfully</p>
            </div>
        </main>
    );
}