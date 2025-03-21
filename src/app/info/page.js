'use client'
import Button from '../components/Button'
import Image from 'next/image'
import { DialogDemo } from '../components/Overlay'
import Link from 'next/link'
export default function Info() {
  return (
    <div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col justify-start items-center gap-[20px]">
          <Link href="/">
            <p className="text-xl text-center font-bold">
              queen's university grade distributions
            </p>
          </Link>
          <p className="text-center">document upload</p>
          <p className="text-center">
            uploading your grade distribution is easy. follow the guide below to
            find out how to do it
          </p>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[400px]">
          {/* <Button text="select documents" /> */}
          <DialogDemo />
        </div>

        <div className="flex flex-col items-center justify-start gap-[20px]">
          <h1 className="text-center">
            How to get your classes' Grade Distribution
          </h1>
          <p>
            Step 1: Login to your <b>solus</b>
          </p>
          <p>
            Step 2: Click on <b>Academic Records</b>
          </p>
          <Image
            className="dark:invert"
            src="/step2.png"
            alt="step2"
            width={800}
            height={200}
            priority
          />
          <p>
            Step 3: Click on <b>“View Grades”</b> in the side bar and select a
            <b> semester</b>
          </p>
          <Image
            className="dark:invert"
            src="/step3.png"
            alt="step3"
            width={800}
            height={200}
            priority
          />
          <p>
            Step 4: Click on <b>"Grade Distribution"</b>
          </p>
          <p className="text-center">
            note: if the button doesn’t exist, it may be too early to view your
            grade distributions for that semester. check back a couple weeks after
            final exams.
          </p>
          <Image
            className="dark:invert"
            src="/step4.png"
            alt="step4"
            width={800}
            height={200}
            priority
          />
          <p>
            When you click <b>"Grade Distribution"</b> you should be redirected to
            a pdf
          </p>
          <p>
            Step 5: <b>Download</b> your grade distribution pdf
          </p>
          <p>
            Step 6: <b>Upload</b> your grade distribution pdf above and you are done!
          </p>
          <p className="text-center w-[60%]">
            <b>Privacy:</b> If you are concerned with privacy for any reason; we
            do not store any of these pdf, the data will be extracted from the
            distribution table from the pdf and then the pdf will be deleted
            forever on our end. Additionally you are not revealing any information
            about your own grades or academic standing. It is only information
            about the distribution of the class.
            <br />
            <br />
            If you are so inclined, you can blur out your name on the pdf, but
            please do not cover or alter the distribution table.
          </p>
        </div>
      </div>
    </div>
  )
}
