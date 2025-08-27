export function footer() {
  const year = new Date().getFullYear();
  return `
    <footer>
      <div class="container">
        <p>&copy; ${year} Kattali Textile Ltd. All rights reserved.</p>
        <p>
          <a href="#" data-page="privacy">Privacy</a> |
          <a href="#" data-page="terms">Terms</a>
        </p>
      </div>
    </footer>
  `;
}