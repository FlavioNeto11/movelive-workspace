export const SITE = {
  name: 'Move&Live',
  slogan: 'Levando vida até você',
  description: 'Saúde e qualidade de vida no conforto do seu condomínio.',
};

// Coloque o número real em produção (com DDI/DDDs) ex: 5511999999999
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5511900000000';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Quero conhecer a Move&Live 🙂',
)}`;
