export function rfq() {
  return `
    <section>
      <img src="assets/images/rfq.png" alt="Business partnership" class="page-image">
      <h2>Request for Quote (RFQ)</h2>
      <p>Looking to partner with us? Fill out the form below and our commercial team will get back to you.</p>
      <form id="rfqForm">
        <div>
          <label for="company">Company Name:</label>
          <input type="text" id="company" name="company" required>
        </div>
        <div>
          <label for="contactPerson">Contact Person:</label>
          <input type="text" id="contactPerson" name="contactPerson" required>
        </div>
        <div>
          <label for="rfqEmail">Email:</label>
          <input type="email" id="rfqEmail" name="email" required>
        </div>
        <div>
          <label for="details">Product Details / Requirements:</label>
          <textarea id="details" name="details" rows="4" required></textarea>
        </div>
        <button type="submit">Submit RFQ</button>
      </form>
    </section>
  `;
}