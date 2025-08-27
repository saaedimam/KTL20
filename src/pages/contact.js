export function contact() {
  return `
    <section>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Reach out with inquiries or feedback:</p>
      <p>Email: <a href="mailto:info@ktlbd.com">info@ktlbd.com</a><br>
         Phone: +880 312 555 123<br>
         Address: Kattali Textile Ltd., Chattogram, Bangladesh</p>
      <form class="contact-form">
        <label>Name:<br><input type="text" name="name" required></label>
        <label>Email:<br><input type="email" name="email" required></label>
        <label>Message:<br><textarea name="message" rows="4" required></textarea></label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  `;
}
