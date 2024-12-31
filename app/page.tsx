import Link from 'next/link'
import React from 'react'

const page = () => {

  const arabicFonts = [
    {
      name: "تاجوال",
      phontName: "Tajawal",
    },
    {
      name: "تاجوال",
      phontName: "Rubik",
    },
    {
      name: "تاجوال",
      phontName: "Readex Pro",
    },
    {
      name: "تاجوال",
      phontName: "Alexandria",
    },
    {
      name: "تاجوال",
      phontName: "Mada",
    },
    {
      name: "تاجوال",
      phontName: "Cairo",
    },
    {
      name: "تاجوال",
      phontName: "Almarai",
    },
    {
      name: "تاجوال",
      phontName: "Beiruti",
    },
    {
      name: "تاجوال",
      phontName: "Marhey",
    },
    {
      name: "تاجوال",
      phontName: "Handjet",
    },
    {
      phontName: "Ruwudu",
    },
    {
      phontName: "Noto Kufi Arabic",
    },
    {
      phontName: "Amiri",
    },
    {
      phontName: "El Messiri",
    },
    {
      phontName: "Lalezar",
    },
    {
      phontName: "Reem Kufi",
    },
    {
      phontName: "Lateef",
    },
    {
      phontName: "Rakkas",
    },
    {
      phontName: "Zain",
    },
    {
      phontName: "Harmattan",
    },
    {
      phontName: "Vibes",
    },
    {
      phontName: "Baloo Bhaijaan 2",
    },
  ]



  return (
    <div className='mx-8 my-16 flex gap-10 flex-col'>
      <h1 className="flex text-5xl" style={{fontFamily: "Tajawal"}}>الخطوط العربية</h1>

      <p className="w-[700px] text-lg">أدخل على Google Fonts
        اضف الخط لقائمة الخطوط التي تريدها
        ثم انسخ الكود الخاص بالخطوط (بعد اضافة كل الخطوط التي تريدهها)
        واضف الكود لملف layout.tsx على سبيل المثال
        في Next Js
      </p>
      
      <p className='text-md hidden'
      >
        الكود الخاص بالخطوط
      <Link href="/font-code" className='hover:underline mr-3 ' >أضغط هنا</Link>
      </p>
      <div className="flex flex-wrap gap-24">

        {arabicFonts.map((font, index) => (
          <div className="flex flex-col gap-2">
          <h1 className="text-3xl" style={{fontFamily: `${font.phontName}`}}>
            شكل الخط
          </h1>

          <span className="text-2xl" style={{fontFamily: "Arial"}}>{font.phontName}</span>
        </div>
        ))}
      
      </div>
      
      
    </div>
  )
}

export default page
