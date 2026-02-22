// Dados dos produtos iPad
const ipadProducts = {
    'ipad-pro-m5': {
        name: 'iPad Pro (M5)',
        description: 'O tablet mais avançado, com ecrã Liquid Retina XDR e performance incomparável.',
        images: ['../imagens/iPads/iPadPro13m5.png', '../imagens/iPads/ipadprom4.jpg'],
        prices: {
            '256 GB': 1479.00,
            '512 GB': 1729.00,
            '1 TB': 2209.00,
            '2 TB': 2689.00
        }
    },
    'ipad-air-m3': {
        name: 'iPad Air (M3)',
        description: 'Inovação elegante e potência para criar e trabalhar em qualquer lugar.',
        images: ['../imagens/iPads/ipadairm3.jpg', '../imagens/iPads/ipadair13m3.png'],
        prices: {
            '128 GB': 599.00,
            '256 GB': 749.00,
            '512 GB': 999.00,
            '1 TB': 1349.00
        }
    },
    'ipad-a16': {
        name: 'iPad (A16)',
        description: 'iPad versátil e prático para trabalho e criatividade.',
        images: ['../imagens/iPads/iPadA16.png', '../imagens/iPads/ipada16.jpg'],
        prices: {
            '64 GB': 329.00,
            '256 GB': 429.00,
            '512 GB': 629.00
        }
    },
    'ipad-mini-a17-pro': {
        name: 'iPad mini (A17 Pro)',
        description: 'O formato perfeito para mobilidade extrema sem comprometer a performance.',
        images: ['../imagens/iPads/ipadminia17pro.jpg', '../imagens/iPads/ipadminia17.jpg'],
        prices: {
            '128 GB': 499.00,
            '256 GB': 649.00,
            '512 GB': 999.00,
            '1 TB': 1349.00
        }
    },
    'ipad-pro-m4': {
        name: 'iPad Pro (M4)',
        description: 'Performance revolucionária em um design mais fino que nunca.',
        images: ['../imagens/iPads/ipadprom4.jpg', '../imagens/iPads/ipadpro13m4.png'],
        prices: {
            '256 GB': 1479.00,
            '512 GB': 1729.00,
            '1 TB': 2209.00,
            '2 TB': 2689.00
        }
    },
    'ipad-pro-6gen': {
        name: 'iPad Pro (6.ª geração)',
        description: 'Desempenho profissional com a melhor precisão de cores do mercado.',
        images: ['../imagens/iPads/iPadPro12,9.png', '../imagens/iPads/ipadpro12.9.jpg'],
        prices: {
            '128 GB': 1079.00,
            '256 GB': 1149.00,
            '512 GB': 1299.00,
            '1 TB': 1579.00
        }
    },
    'ipad-air-m2': {
        name: 'iPad Air (M2)',
        description: 'Equilíbrio perfeito entre potência, versatilidade e qualidade de construção.',
        images: ['../imagens/iPads/ipadair13m3.png', '../imagens/iPads/ipadair13m2.jpg'],
        prices: {
            '64 GB': 599.00,
            '256 GB': 749.00,
            '512 GB': 999.00,
            '1 TB': 1349.00
        }
    },
    'ipad-pro-10-5': {
        name: 'iPad Pro 10.5',
        description: 'A experiência completa do iPad Pro em um tamanho mais compacto.',
        images: ['../imagens/iPads/ipadpro10.5.jpg', '../imagens/iPads/ipadpro11.jpg'],
        prices: {
            '64 GB': 649.00,
            '256 GB': 749.00,
            '512 GB': 949.00
        }
    },
    'ipad-air-2': {
        name: 'iPad Air 2',
        description: 'Portabilidade e potência para profissionais em movimento.',
        images: ['../imagens/iPads/ipadair2.jpg', '../imagens/iPads/ipadair11m2.png'],
        prices: {
            '32 GB': 499.00,
            '128 GB': 599.00,
            '256 GB': 699.00
        }
    }
};

// Função para obter dados de um produto
function getIpadProduct(productId) {
    return ipadProducts[productId] || null;
}

// Função para formatar URL com o id do produto
function getProductURL(productId) {
    const product = getIpadProduct(productId);
    if (!product) return 'product-detail-iPad.html';
    return `product-detail-iPad.html?id=${productId}`;
}

// Dados dos produtos iPhone
const iphoneProducts = {
    'iphone-17-pro': {
        name: 'iPhone 17 Pro',
        description: 'Design inovador, para o melhor desempenho e maior autonomia.',
        images: ['../imagens/iPhones/iphone_17_pro.jpg', '../imagens/iPhones/iPhone17pro/iphone17pro2.png'],
        prices: {
            '256 GB': 1349.00,
            '512 GB': 1599.00,
            '1 TB': 1849.00
        }
    },
    'iphone-17': {
        name: 'iPhone 17',
        description: 'Mais velocidade e autonomia para o dia a dia.',
        images: ['../imagens/iPhones/iphone_17.jpg', '../imagens/iPhones/iPhone17/iphone17carrinho.png'],
        prices: {
            '128 GB': 999.00,
            '256 GB': 1099.00,
            '512 GB': 1249.00
        }
    },
    'iphone-16': {
        name: 'iPhone 16',
        description: 'Equilibrio perfeito entre desempenho e eficiencia.',
        images: ['../imagens/iPhones/iphone_16.jpg', '../imagens/iPhones/iphone16.png'],
        prices: {
            '128 GB': 899.00,
            '256 GB': 999.00,
            '512 GB': 1149.00
        }
    },
    'iphone-15': {
        name: 'iPhone 15',
        description: 'Camera avancada e desempenho rapido para tudo.',
        images: ['../imagens/iPhones/iphone_15.jpg', '../imagens/iPhones/iphone15.png'],
        prices: {
            '128 GB': 799.00,
            '256 GB': 899.00,
            '512 GB': 1049.00
        }
    },
    'iphone-plus': {
        name: 'iPhone Plus',
        description: 'Mais ecrã, mais bateria e mais conforto.',
        images: ['../imagens/iPhones/iphone_14plus.jpg', '../imagens/iPhones/iphone14plus.png'],
        prices: {
            '128 GB': 899.00,
            '256 GB': 999.00,
            '512 GB': 1149.00
        }
    },
    'iphone-14': {
        name: 'iPhone 14',
        description: 'Potencia e confianca para o dia a dia.',
        images: ['../imagens/iPhones/iphone_14.jpg', '../imagens/iPhones/iphone14.png'],
        prices: {
            '128 GB': 699.00,
            '256 GB': 799.00,
            '512 GB': 949.00
        }
    },
    'iphone-13': {
        name: 'iPhone 13',
        description: 'Desempenho consistente e camera versatil.',
        images: ['../imagens/iPhones/iphone_13.jpg', '../imagens/iPhones/iphone13.png'],
        prices: {
            '128 GB': 599.00,
            '256 GB': 699.00,
            '512 GB': 849.00
        }
    },
    'iphone-12': {
        name: 'iPhone 12',
        description: 'Design classico com grande desempenho.',
        images: ['../imagens/iPhones/iphone_12.jpg', '../imagens/iPhones/iphone12.png'],
        prices: {
            '128 GB': 499.00,
            '256 GB': 599.00,
            '512 GB': 749.00
        }
    },
    'iphone-11': {
        name: 'iPhone 11',
        description: 'Confiavel e fluido para o dia a dia.',
        images: ['../imagens/iPhones/iphone_11.jpg', '../imagens/iPhones/iphone11.png'],
        prices: {
            '64 GB': 399.00,
            '128 GB': 449.00,
            '256 GB': 549.00
        }
    }
};

// Função para obter dados de um iPhone
function getIphoneProduct(productId) {
    return iphoneProducts[productId] || null;
}

// Função para formatar URL com o id do iPhone
function getIphoneProductURL(productId) {
    const product = getIphoneProduct(productId);
    if (!product) return 'product-detail.html';
    return `product-detail.html?id=${productId}`;
}
