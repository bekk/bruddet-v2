export const imageProjection =
    `
    image->{
        "alt": image.alt[$lang],
        "credit": image.credit,
        "imageUrl": image.asset->url
    }
    `;