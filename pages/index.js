
export default function Home() {
  return (
    <div className="container">
      <h1>Bhara.com - Get the Domain</h1>
      <p>TO GET THE DOMAIN CONTACT WITH THE EMAIL BELOW:</p>
      <p>
        <strong>mail.bhara.com@gmail.com</strong>
      </p>
      <p>You will get a reply within 24 hours.</p>
      <Link href="mailto:mail.bhara.com@gmail.com">
        <a className="email">Contact Now</a>
      </Link>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
        }

        h1 {
          color: #333;
          font-size: 28px;
          margin-bottom: 20px;
        }

        p {
          color: #666;
          font-size: 18px;
          margin-bottom: 30px;
        }

        .email {
          font-size: 20px;
          color: #fff;
          background-color: #007bff;
          border-radius: 4px;
          padding: 10px 20px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .email:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  )
}
