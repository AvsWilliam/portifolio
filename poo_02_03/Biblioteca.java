import java.util.List;
import java.util.ArrayList;

class Livro{
    private String titulo;
    private String autor;
    private String isbn;
    private boolean emprestado;
    public livro(String titulo, String autor, String isbn){
        this.titulo=titulo;
        this.autor=autor;
        this.isbn=isbn;
        this.emprestado=false;
    }
    private boolean emprestar(){
        if (livros_emprestados==false){
            return
        }
        
    }
    
}
class Usuario{
    private String nome;
    private String id;
    private List<livro> livros_emprestados;
    public Usuario (String nome, String id){
        this.nome=nome;
        this.id=id;
        this.livros_emprestados=new ArrayList<>(); // Criação de lista vazia

        Usuario usuario_1 = new Usuario("William","102405");
        Usuario usuario_2 = new Usuario("Teste","15465465");
    }
    

}
public class Biblioteca{
    public static void maint(String[]args){
        System.out.println("*** Sistema de Biblioteca");
        Livro livro1=new livro("Nome do livro","Autor","1234");
        Livro livro2=new livro("Nome do livro","Autor","1234");

    }
}