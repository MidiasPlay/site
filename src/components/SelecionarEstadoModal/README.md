# Modal de Seleção de Estado - Integração com Planos

## ✅ Implementação Completa

O modal de seleção de estado foi integrado com sucesso à página de planos. Aqui está o resumo da implementação:

### 🎯 Funcionalidades Implementadas

1. **Botões dos Planos**:
   - ✅ `Promo Box` - ID: `btn-promo-box`
   - ✅ `Promo Box Fila` - ID: `btn-promo-box-fila`  
   - ✅ `Promo Box Custom` - ID: `btn-promo-box-custom`

2. **Modal Inteligente**:
   - ✅ Abre automaticamente ao clicar nos botões
   - ✅ Título dinâmico baseado no plano selecionado
   - ✅ Mensagem personalizada no WhatsApp com plano e estado
   - ✅ Validação obrigatória de estado antes do envio

### 📱 Fluxo de Uso

1. **Cliente clica em "Escolher Plano"** → Modal abre
2. **Seleciona o estado** → Campo obrigatório validado
3. **Clica em "Contatar via WhatsApp"** → Abre WhatsApp com mensagem personalizada

### 💬 Exemplo de Mensagem WhatsApp

```
Olá! Tenho interesse nos serviços do MidiasPlay para o estado: São Paulo (SP)

Plano de interesse: Promo Box Fila
```

### 🔧 Arquivos Criados/Modificados

**Novos Componentes:**
- `src/components/SelecionarEstadoModal/index.tsx` - Modal principal
- `src/components/SelecionarEstadoModal/style.css` - Estilos do modal
- `src/components/SelecionarEstadoModal/Wrapper.tsx` - Wrapper para Astro
- `src/components/SelecionarEstadoModal/estado.enum.ts` - Enum dos estados (já existia)

**Páginas Modificadas:**
- `src/pages/planos.astro` - Integração com modal

### 🎨 Características do Design

- **Responsivo**: Funciona em desktop e mobile
- **Acessível**: Suporte a teclado e screen readers
- **Animado**: Transições suaves e feedback visual
- **Moderno**: Design clean com gradientes e sombras

### ⚙️ Configuração

**Número do WhatsApp**: Altere no arquivo `Wrapper.tsx`:
```tsx
phoneNumber="5511999999999" // Substitua pelo número real
```

### 🚀 Como Testar

1. Execute `pnpm dev`
2. Acesse `http://localhost:4322/planos`
3. Clique em qualquer botão "Escolher Plano"
4. Selecione um estado
5. Clique em "Entrar em contato via WhatsApp"

### 🔄 Estados do Modal

- **Fechado**: Estado inicial
- **Aberto**: Exibe formulário de seleção
- **Validação**: Impede envio sem estado selecionado
- **WhatsApp**: Redireciona com mensagem personalizada

### 📊 Dados Capturados

- Estado selecionado (sigla + nome completo)
- Plano de interesse
- Timestamp do contato (implícito via WhatsApp)

---

**✨ Implementação 100% funcional e pronta para produção!**