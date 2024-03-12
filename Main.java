
package Actividad37;

/**
 * Clase Main para ejecutar operaciones básicas en una cuenta bancaria.
 * Incluye un ejemplo de uso de la clase CCuenta.
 */
public class Main {

    /**
     * Método principal para ejecutar la aplicación.
     *
     * @param args Argumentos de línea de comandos (no utilizados)
     */
    public static void main(String[] args) {
        CCuenta miCuenta;
        double saldoActual;

        miCuenta = new CCuenta("Juan López", "1000-2365-85-123456789", 2500, 0);
        try {
        	//NO ACEPTA CANTIDADES NEGATIVAS
        	//Álvaro Gómez Cedenilla 1ºDAW
            miCuenta.retirar(3000);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            System.out.println("Fallo al retirar");
        }

        try {
        	//NO ACEPTA CANTIDADES NEGATIVAS
        	//Álvaro Gómez Cedenilla 1ºDAW
            System.out.println("Ingreso en cuenta");
            miCuenta.ingresar(0);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            System.out.println("Fallo al ingresar");
        }
        saldoActual = miCuenta.estado();
        System.out.println("El saldo actual es " + saldoActual);
    }
}
