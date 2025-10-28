export enum EstadoEnum {
    AC = 'AC', AL = 'AL', AM = 'AM', AP = 'AP', BA = 'BA',
    CE = 'CE', DF = 'DF', ES = 'ES', GO = 'GO', MA = 'MA',
    MG = 'MG', MS = 'MS', MT = 'MT', PA = 'PA', PB = 'PB',
    PE = 'PE', PI = 'PI', PR = 'PR', RJ = 'RJ', RN = 'RN',
    RO = 'RO', RR = 'RR', RS = 'RS', SC = 'SC', SE = 'SE',
    SP = 'SP', TO = 'TO'
}

export const EstadoEnumLabel = {
    [EstadoEnum.AC]: 'Acre',
    [EstadoEnum.AL]: 'Alagoas',
    [EstadoEnum.AM]: 'Amazonas',
    [EstadoEnum.AP]: 'Amapá',
    [EstadoEnum.BA]: 'Bahia',
    [EstadoEnum.CE]: 'Ceará',
    [EstadoEnum.DF]: 'Distrito Federal',
    [EstadoEnum.ES]: 'Espírito Santo',
    [EstadoEnum.GO]: 'Goiás',
    [EstadoEnum.MA]: 'Maranhão',
    [EstadoEnum.MG]: 'Minas Gerais',
    [EstadoEnum.MS]: 'Mato Grosso do Sul',
    [EstadoEnum.MT]: 'Mato Grosso',
    [EstadoEnum.PA]: 'Pará',
    [EstadoEnum.PB]: 'Paraiba',
    [EstadoEnum.PE]: 'Pernambuco',
    [EstadoEnum.PI]: 'Piauí',
    [EstadoEnum.PR]: 'Paraná',
    [EstadoEnum.RJ]: 'Rio de Janeiro',
    [EstadoEnum.RN]: 'Rio Grande do Norte',
    [EstadoEnum.RO]: 'Rondônia',
    [EstadoEnum.RR]: 'Roraima',
    [EstadoEnum.RS]: 'Rio Grande do Sul',
    [EstadoEnum.SC]: 'Santa Catarina',
    [EstadoEnum.SE]: 'Sergipe',
    [EstadoEnum.SP]: 'São Paulo',
    [EstadoEnum.TO]: 'Tocantins'
}

export const estadoOptionsList = Object.values(EstadoEnum).map((estado) => ({
    value: estado,
    label: EstadoEnumLabel[estado],
}));

export const estadoOptionsMap = new Map(estadoOptionsList.map((estado) => [estado.value, estado.label]));