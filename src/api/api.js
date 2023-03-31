import axios from "axios";

const BOT_TOKEN = encodeURIComponent('6026959885:AAEzLEpFid7U8lhSCmbghBRsIRntph-cMLA')
const chat_id = '-938347843'
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}

const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?parse_mode=html`

export const sendMessageToTelegram = async text => {
  await axios.post(
    TELEGRAM_API_URL,
    {
      chat_id: chat_id,
      text
    },
    axiosConfig
  )
    .then(res => res.ok && res.result)
    .catch(err => alert(`Не удалось отправить сообщение. ${err.message}`))
}