package rc.bootsecurity.model.enums;

public enum TICKET_TYPE {
    Software("Software"),
    Hardware("Hardware"),
    Server("Server"),
    Užívateľ("Užívateľ"),
    Iné("Iné");

    private final String text;


    TICKET_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
