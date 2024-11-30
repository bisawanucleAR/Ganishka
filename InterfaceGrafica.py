import Chatbot as pc 
from tkinter import *

main_window = Tk()

main_window.title("ChatBot")
main_window.geometry("500x700")

main_window.grid()


frame = Frame(main_window)
frame.grid()

l_indentif = Label(frame, text="insira uma mensagem aqui")
l_indentif.grid(row=0, column=0)

e_mensagem = Entry(frame)
e_mensagem.grid(row=0, column=1)

frame2 = Frame(main_window)
frame2.grid(row=1, column=0)
v = StringVar()
Label(frame2, textvariable=v).grid()

nome_maquina = "Gushnoko o devorador"

v.set("Qual seu nome?")

entrada_sugestao = False
entrada_nome_usuario = True

nome_usuario = ""

def roda_Chatbot():
    global entrada_sugestao
    global entrada_sugestao
    global historico_conversa
    global nome_usuario

    if entrada_nome_usuario:
        nome_usuario = e_mensagem.get()
        saudacao = pc.saudacoes.gui(nome_maquina)
        historico_conversa = nome_maquina + ":" + saudacao + "/n"
        v.set(historico_conversa)
        entrada_nome_usuario = False
    else:
        texto = e_mensagem.get()
        historico_conversa += "/n" + nome_usuario + ":" + texto
        v.set(historico_conversa)

        if entrada_sugestao:
            pc.salva_sugestao(texto)
            entrada_sugestao = False
            historico_conversa += "/n agora aprendi! obrigado compade hihihiha"
            v.set(historico_conversa)

        else:
            resposta = pc.buscaResposta_GUI("cliente: " + texto +"/n")
            if resposta == "Me desculpa, nao sei oque falar":
                historico_conversa += "oque voce esperava? /n"
                v.set(historico_conversa)
                entrada_sugestao = True
            else:
                historico_conversa += "/n" + pc.exibeResposta_GUI(texto, resposta, nome_maquina)
                v.set(historico_conversa)

Button(frame, text= "Clique", command=roda_Chatbot).grid(row=0, column=2)
    

main_window.mainloop()
