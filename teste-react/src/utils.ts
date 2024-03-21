import { Func } from './services/api'

export const formataNumero = (numero: string) => {
  const match = numero.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/)

  console.log(match)

  if (match) {
    return '+ ' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4]
  }

  return numero
}

export const formataData = (data: string) => {
  const cleaned = ('' + data).replace(/\D/g, '')
  const pegandoDia = cleaned.slice(6, 8)
  const pegandoMes = cleaned.slice(4, 6)
  const pegandoAno = cleaned.slice(0, 4)

  return pegandoDia + '/' + pegandoMes + '/' + pegandoAno
}

export const filtroPesquisa = (funcionario: Func[], busca: string) => {
  const filtro = funcionario?.filter((objeto) => {
    const name = objeto.name.toLowerCase()
    const job = objeto.job.toLowerCase()
    const phone = objeto.phone.toLowerCase()
    const palavraChave = busca.toLowerCase()

    return (
      name.includes(palavraChave) ||
      job.includes(palavraChave) ||
      phone.includes(palavraChave)
    )
  })

  return filtro
}
