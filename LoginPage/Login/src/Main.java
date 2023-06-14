import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
         Connection conn1 = null;
         try{
            String dbURL3 = "jdbc:postgresql://localhost:5432/login_db";
            Properties parameters = new Properties();
            parameters.put("user", "postgres");
            parameters.put("password", "deepika1128");
 
            conn1 = DriverManager.getConnection(dbURL3, parameters);
         if (conn1 != null) {
             System.out.println("Connected to database #1");
         }
        }
        catch (Exception ex) {
            System.out.println(ex);
        } 
    }
}
