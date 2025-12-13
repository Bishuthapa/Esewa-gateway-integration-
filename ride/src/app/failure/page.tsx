export default function FailurePage() {
    return (
        <main>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center h-screen gap-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-red-400 rounded-full blur-2xl opacity-75 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-red-400 to-red-500 h-32 w-32 flex items-center justify-center rounded-full shadow-2xl transform hover:scale-110 transition-transform">
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-red-400 drop-shadow-lg">Failed!</h1>
                <p className="text-gray-400 text-lg">Your request could not be completed</p>
            </div>
        </main>
    );
}