// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import Swal from "sweetalert2";
// import { CartProvider } from "@/app/context/CartContext";

// export default function SuccessPage() {
//   const router = useRouter();
// // 
//   useEffect(() => {
//     const sessionId = router.query.session_id;
//     if (sessionId) {
//       Swal.fire("Success!", "Your payment was successful!", "success");
//       // Optionally, you can clear the cart or perform other actions here
//     }
//   }, [router.query.session_id]);

//   return (
//     <CartProvider>
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <h1 className="text-2xl font-bold text-red-800">Payment Successful!</h1>
//     </div>
//     </CartProvider>
//   );
// }



import { useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const sessionId = router.query.session_id;
    if (sessionId) {
      Swal.fire({
        title: "Success!",
        text: "Your payment was successful!",
        icon: "success",
        confirmButtonText: "Continue Shopping",
        customClass: {
          confirmButton: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/"); // Redirect to the home page or any other page
        }
      });
      // Directly remove the cart data from localStorage
      localStorage.removeItem("cart");
    }
  }, [router.query.session_id]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-pink mb-4 animate-bounce">
          Payment Successful!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}







