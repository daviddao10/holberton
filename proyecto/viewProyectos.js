
export function buildProductView(product) {

    return `
        <figure>
          <div class="img-container">
            <img
              src="${product.img}"
              alt="shin chan la invasion"
            >
          </div>
          <figcaption>${product.description}</figcaption>
        </figure>
    `;
  }