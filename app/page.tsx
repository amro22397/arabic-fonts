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
      <h1 className="flex text-5xl" style={{fontFamily: "Readex Pro"}}>الخطوط العربية</h1>

      <p className="w-[700px] text-lg mb-1">أدخل على Google Fonts
        اضف الخط التي تريده لقائمة الخطوط التي تريدها <br />
        ثم انسخ الكود الخاص بالخطوط (بعد اضافة كل الخطوط التي تريدهها) <br />
        واضف الكود لملف layout.tsx داخل تاق {`<head></head>`} على سبيل المثال
        في Next Js
        <br />

        او انسخ الكود في اي ملف CSS مثل الرئيسي في Next js وهو Global.css
      </p>
      
      <p className='text-md hidden'
      >
        الكود الخاص بالخطوط
      <Link href="/font-code" className='hover:underline mr-3 ' >أضغط هنا</Link>
      </p>


      <Link href={`/english-fonts`} className='hover:underline text-indigo-600 text-2xl' >
      Go to english fonts
      </Link>


      <div className="flex flex-wrap gap-24">

        {arabicFonts.map((font, index) => (
          <div key={index} className="flex flex-col gap-2">
          <h1 className="text-3xl" style={{fontFamily: `${font.phontName}`}}>
            شكل الخط
          </h1>

          <span className="text-2xl" style={{fontFamily: `${font.phontName}`}}>{font.phontName}</span>
        </div>
        ))}
      
      </div>
      
      
    </div>
  )
}

export default page
