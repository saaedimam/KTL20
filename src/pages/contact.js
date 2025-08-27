export function contact() {
  return `
    <section>
      <img src="assets/images/contact.png" alt="Get in touch" class="page-image">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Please reach out using the form below or via the contact information provided.</p>
      <form id="contactForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <p class="contact-info">
        <strong>Address:</strong> Chowdhury Bari, Kornel Jones Road, Kattali, Pahartali, Chittagong, Bangladesh<br>
        <strong>Phone:</strong> +880 XXX XXX XXXX<br>
        <strong>Email:</strong> info@ktlbd.com
      </p>
    </section>
  `;
}