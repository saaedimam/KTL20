export function rfq() {
  return `
    <section>
      <h2>Request a Quote</h2>
      <p>Tell us about your project and we’ll provide pricing and timeline information.</p>
      <form class="rfq-form">
        <label>Name:<br><input type="text" name="name" required></label>
        <label>Email:<br><input type="email" name="email" required></label>
        <label>Company:<br><input type="text" name="company"></label>
        <label>Product type:<br><input type="text" name="product"></label>
        <label>Quantity:<br><input type="number" name="quantity" min="1"></label>
        <label>Details:<br><textarea name="details" rows="4"></textarea></label>
        <button type="submit">Submit RFQ</button>
      </form>
    </section>
  `;
}
